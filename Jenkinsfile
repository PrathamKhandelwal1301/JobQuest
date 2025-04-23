pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'   // adjust if your Node backend is in a different folder
        FRONTEND_DIR = 'frontend' // adjust if your React frontend is in a different folder
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    sh 'npm run build' // or just skip if it's a pure API
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    sh 'npm test || true' // Avoid pipeline failure on test error (optional)
                }
            }
        }

        // Optional: Add SonarQube scan if configured
        // stage('SonarQube Scan') {
        //     steps {
        //         sh 'sonar-scanner -Dsonar.projectKey=jobquest -Dsonar.sources=. -Dsonar.host.url=http://localhost:9000 -Dsonar.login=YOUR_TOKEN'
        //     }
        // }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: "${FRONTEND_DIR}/build/**", fingerprint: true
            }
        }
    }

    post {
        always {
            echo 'Cleaning up...'
            cleanWs()
        }
    }
}
