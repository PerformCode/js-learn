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
                bat echo 'Building the app'
            }
        }
        stage('Test') {
            steps {
                bat echo 'Running tests'
            }
        }
        stage('Deploy') {
            steps {
                bat echo 'Deploying the app'
            }
        }
    }
    post{
        success{
            bat echo "build successful"
        }
        failure{
            bat echo "build failed"
        }
    }
}
