pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/PerformCode/js-learn'
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
