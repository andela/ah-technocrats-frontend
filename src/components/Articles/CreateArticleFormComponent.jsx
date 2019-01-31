import React from 'react';
import { PropTypes } from 'prop-types';
import SimpleMDE from 'react-simplemde-editor';
import { toast } from 'react-semantic-toasts';
import {
  Sidebar,
  Segment,
  Button,
} from 'semantic-ui-react';
import 'simplemde/dist/simplemde.min.css';
import Footer from '../Footer/Footer';
import SideBarMenu from '../Menu/Menu';
import Header from '../Header/Header';
import './Articles.scss';


const CreateArticleForm = ({
  onChange, onSubmit, handleChange, handleCloudinary,
  title, description, textValue, createSuccess, history, loading, words,
}) => (
  <div>
    <Header history={history} />
    <Sidebar.Pushable as={Segment} attached="bottom">
      <SideBarMenu />
      <Sidebar.Pusher id="pusher" className="pusher-height">
        <div className="pusher">
          <div className="ui container">
            <div className="ui space borderless">
              <h2 className="ui centered text-center">Create article</h2>
              <br />
              { createSuccess ? toast({
                type: 'success',
                icon: 'check',
                description: 'Successfully created',
                time: 3000,
                onClose: () => history.push('/articles'),
              }) : null }
              <form onSubmit={onSubmit}>
                <h3 className="ui title">Title</h3>
                <div className="ui input transparent">
                  <input
                    className="articleInput"
                    name="title"
                    type="text"
                    placeholder="eg John the Ripper is back"
                    onChange={onChange}
                    value={title}
                    required
                  />
                </div>
                <h3 className="ui title">Description</h3>
                <div className="ui input transparent">
                  <input
                    className="articleInput"
                    onChange={onChange}
                    name="description"
                    type="text"
                    placeholder="eg. This is an article about the story of John the Ripper throughout the history of UK"
                    multiple="multiple"
                    value={description}
                  />
                </div>
                <br />
                <br />
                <Button className="descriptive" onClick={handleCloudinary}>Add Image</Button>
                <br />
                <br />
                <img id="image" src="" alt="" />
                <br />
                <div className="ui row">
                  <h3>Body</h3>
                  {}
                  <SimpleMDE
                    required
                    id="mde"
                    onChange={handleChange}
                    name="body"
                    value={textValue}
                    options={{
                      autofocus: true,
                      spellChecker: true,
                      autosave: true,
                    }}
                  />
                </div>
                <br />
                <Button
                  disabled={loading || words < 100}
                  className="ui button positive right float"
                  type="submit"
                  id="submit"
                >
            Save article
                </Button>
                <br />
                <br />
                <br />
                <br />
              </form>
            </div>

          </div>
        </div>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
    <Footer />
  </div>
);

CreateArticleForm.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  handleChange: PropTypes.func,
  handleCloudinary: PropTypes.func,
  title: PropTypes.string,
  description: PropTypes.string,
  textValue: PropTypes.string,
  loading: PropTypes.bool,
  createSuccess: PropTypes.bool,
  history: PropTypes.func,
  words: PropTypes.number,
};

CreateArticleForm.defaultProps = {
  onSubmit: () => {},
  onChange: () => {},
  handleChange: () => {},
  handleCloudinary: () => {},
  title: '',
  description: '',
  textValue: '',
  loading: false,
  createSuccess: false,
  history: () => {},
  words: 0,
};

export default CreateArticleForm;
