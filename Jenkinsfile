pipeline {
    agent any

    environment {
        IMAGE_NAME = "sicei"  
        IMAGE_TAG = "${env.BUILD_ID}"  
    }

    stages {
        stage('Build') {
            steps {
                echo "🔨 Construyendo la imagen Docker..."
                sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Deploy') {
            steps {
                echo "🚀 Desplegando el contenedor..."
                sh "docker stop sicei-container || true"
                sh "docker rm sicei-container || true"
                sh "docker run -p 80:80 --name sicei-container -d ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
    }
}