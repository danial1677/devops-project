pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-project .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker stop devops-app || true'
                sh 'docker rm devops-app || true'
                sh 'docker run -d -p 3000:3000 --name devops-app devops-project'
            }
        }
    }
}