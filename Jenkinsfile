pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/PerformCode/js-learn'
            }
        }
        stage('Build') {
            steps {
                sh 'echo "Building the app"'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests"'
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
