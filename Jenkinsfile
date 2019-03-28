pipeline {
  agent any
  stages {
    stage('Install packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test application') {
      steps {
        sh 'npm run test'
      }
    }
  }
}