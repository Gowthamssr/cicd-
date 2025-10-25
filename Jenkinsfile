pipeline
{
  agent any
  stages{
    stage('Checkout'){
      steps{
        echo 'checking out code'
         git(
          url: 'https://github.com/Gowthamssr/jenkins.git',
          branch: 'main',
          credentialsId: 'github-token'
        )
      }     
      }
      stage('Build'){
        steps{
          echo 'building code'
          sh 'npm install'
        }
      }
      stage('Test'){
        steps{
          echo 'testing code'
          sh 'npm test'
        }
      }

        stage('Deploy'){
          steps{
            echo 'deploying code'
            sh 'npm run deploy  '
          }
        }
}
}