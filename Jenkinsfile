pipeline {
    agent any

    environment {
        CONTAINER_NAME = "next-app"
        IMAGE_NAME = "next-image"
        EMAIL = "biswassnaeemcse@gmail.com"
        PORT = "3000"
    }

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/biswass101/jenkins-aws-or-vps-deployment.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME} .'
            }
        }

        stage('Stop and Remove Previous Container') {
            steps {
                sh '''
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                '''
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                    docker run -d \
                        -p ${PORT}:${PORT} \
                        --name ${CONTAINER_NAME} \
                        ${IMAGE_NAME}
                '''
            }
        }

        stage('Send Email Notification') {
            steps {
                emailext(
                    subject: 'Next.js App Deployed Successfully on EC2',
                    body: "Your Next.js app is deployed! http://43.204.217.199:${PORT}/",
                    to: "${EMAIL}"
                )
            }   
        }
    }
}