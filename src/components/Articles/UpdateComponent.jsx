import React from 'react';
import { PropTypes } from 'prop-types';
import { Sidebar, Segment, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import SimpleMDE from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';

import './Articles.scss';
import Footer from '../Footer/Footer';
import SideBarMenu from '../Menu/Menu';
import 'react-semantic-toasts/styles/react-semantic-alert.css';
import Header from '../Header/Header';
import SuccessComponent from '../Authentication/Login/SuccessComponent';
import Errors from '../common/ErrorComponent';

const UpdateComponent = ({
  onSubmit,
  onChange,
  error,
  success,
  updated,
  // eslint-disable-next-line camelcase
  article_slug,
  resetUpdated,
  handleCloudinary,
  onChangeMDE,
}) => (
  <React.Fragment>
    <Header />
    <Sidebar.Pushable as={Segment} attached="bottom">
      <SideBarMenu />
      <Sidebar.Pusher id="pusher" className="pusher-height">
        <div className="pusher">
          <div className="ui container">
            <div className="ui space borderless">
              <h2 className="ui centered text-center">Edit article</h2>
              <br />
              <form onSubmit={onSubmit} data-test="searchBoxComponent">

                <SuccessComponent reset={resetUpdated} success={updated} message={success} />

                {updated ? <Redirect to="/myarticles" /> : null}
                <h3 className="ui title">Title</h3>
                <div />
                <div className="ui input transparent" id="title">
                  <input
                    value={localStorage.title}
                    name="title"
                    type="text"
                    placeholder="title"
                    onChange={onChange}
                  />
                </div>
                {error.title ? <Errors field={error.title} /> : null}
                <h3 className="ui title">Description</h3>
                <div className="ui input transparent" id="description">
                  <input
                    value={localStorage.description}
                    onChange={onChange}
                    name="description"
                    type="text"
                    placeholder="eg. This is an article about the story of John the Ripper throughout the history of UK"
                  />
                </div>
                {error.description ? <Errors field={error.description} /> : null}
                <br />
                <br />
                <br />

                <Button className="descriptive" type="button" onClick={handleCloudinary}>Add Image</Button>
                <br />
                <br />
                <img id="article_image" src="" alt="" />
                <br />

                <div className="ui row" id="body">
                  <h3>Body</h3>
                  <SimpleMDE
                    onChange={onChangeMDE}
                    name="body"
                    value={localStorage.body}
                    options={{
                      autofocus: true,
                      spellChecker: true,
                      autosave: true,
                    }}
                  />
                </div>

                {error.body ? <Errors field={error.body} /> : null}
                <br />
                <button className="ui button positive right float" type="submit" id="submit" slug={article_slug}>Save article</button>
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
  </React.Fragment>
);
UpdateComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleCloudinary: PropTypes.func,
  onChange: PropTypes.func,
  onChangeMDE: PropTypes.func,
  error: PropTypes.shape().isRequired,
  success: PropTypes.bool,
  updated: PropTypes.bool,
  article_slug: PropTypes.string,
  resetUpdated: PropTypes.string,
};

UpdateComponent.defaultProps = {
  success: null,
  handleCloudinary: null,
  onChange: null,
  onChangeMDE: null,
  updated: null,
  article_slug: null,
  resetUpdated: null,
};

export default UpdateComponent;
