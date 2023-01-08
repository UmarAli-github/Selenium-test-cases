pipeline {
    agent any

    stages {
        stage('Build and Run') {
            steps {
                git 'https://github.com/user/repository.git'
                docker.image('node').inside {
                    sh 'npm install'
                    sh 'node test-case-1.js'
                    sh 'node test-case-2.js'
                    sh 'node test-case-3.js'
                    sh 'node test-case-4.js'
                    sh 'node test-case-5.js'
                }
            }
        }
    }
}
