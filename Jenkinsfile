pipeline
{
  agent any
  stages{
    stage('checkout'){
      steps{
        echo 'checking out code'
        git branch: 'main', url: 'https://github.com/Gowthamssr/jenkins.git'
      }     
      }
      stage('build'){
        steps{
          echo 'building code'
          sh 'npm install'
        }
      }
      stage('test'){
        steps{
          echo 'testing code'
          sh 'npm test'
        }

        stage('deploy'){
          steps{
            echo 'deploying code'
            sh 'npm run deploy  '
          }
        }
}
  }
}