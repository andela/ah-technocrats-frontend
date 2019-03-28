pipeline {
  agent any
  stages {
    stage('Install yarn') {
      steps {
        sh 'sudo npm install -g yarn'
      }
    }
    stage('Install packages') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Test application') {
      steps {
        sh 'yarn run test'
      }
    }
  }
}