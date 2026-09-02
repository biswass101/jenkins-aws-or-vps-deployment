node {
    def appDir = '/var/www/nextjs-app'

    stage('Clean Workspace') {
        echo "Cleaning Jenkins Workspace"
        deleteDir()
    }

    stage('Clone Repo') {
        echo "Cloning The Repo..."
        git(
            branch: 'main',
            url: 'https://github.com/biswass101/jenkins-aws-or-vps-deployment'
        )
    }

    stage('Deploy to EC2/VPS') {
        echo 'Deploying to EC2/VPS...'
        sh """
            sudo mkdir -p ${appDir}
            sudo chown -R jenkins:jenkins ${appDir}

            rsync -av --delete --exclude='.git' --exclude='node_modules' ./ ${appDir}

            cd ${appDir}
            sudo npm install
            sudo npm run build
            sudo fuser -k 3000/tcp || true
            npm run start
        """
    }
}