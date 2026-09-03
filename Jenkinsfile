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
            steps{
                git branch: 'main', "https://github.com/biswass101/jenkins-aws-or-vps-deployment.git"
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}'
            }
        }

        stage('Stop and remove previous container') {
            steps {
                sh ```
                    docker stop ${CONTAINER_NAME} || true
                    docker rm ${CONTAINER_NAME} || true
                ```
            }
        }

        stage('Docker container run') {
            steps {
                sh ```
                    docker run -d -p ${PORT}:${PORT} --name ${CONTAINER_NAME} ${IMAGE_NAME}
                ```
            }
        }

        stage('Send Email Notification') {
            steps {
                emailText(
                    subject: "Next Js App Deployed Successfully on EC2",
                    body: "Your NextJs app is Deployed! http://43.204.217.199/${PORT}/"
                    to: "${EMAIL}"
                )
            }
        }
    }
}

