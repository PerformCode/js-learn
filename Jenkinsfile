pipeline {
    agent any
    tools{
        nodejs 'Node_22_15'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/PerformCode/js-learn.git',
                branch: 'main',
                credentialsId: 'github-app-creds'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo "Deploying the app"'
            }
        }
    }
    post{
        success{
            sh 'echo "build successful"'
        }
        failure{
            sh 'echo "build failed"'
        }
    }
}
