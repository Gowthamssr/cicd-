pipeline {
  agent any
  options {
    skipDefaultCheckout(true)
  }
  stages {
    stage('Checkout') {
      steps {
        echo 'Checking out code...'
        git(
          url: 'https://github.com/Gowthamssr/cicd-.git',
          branch: 'main',
          credentialsId: 'github-token'
        )
      }
    }

    stage('Build') {
      steps {
        echo 'Building code...'
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        echo 'Running tests...'
        bat 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying code...'
        bat 'npm run deploy'
      }
    }
  }
}
