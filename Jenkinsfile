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

    stage('Deploy to VPS') {
        echo 'Deploying to VPS...'

        sh """
            rsync -av --delete \
                --exclude='.git' \
                --exclude='node_modules' \
                ./ ${appDir}/

            cd ${appDir}

            npm install
            npm run build

            pm2 delete nextjs-app || true
            pm2 start npm --name nextjs-app -- start
            pm2 save
        """
    }
}