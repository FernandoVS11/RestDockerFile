pipeline {
    agent any

    environment {
        IMAGE_NAME = "sicei"  
        CONTAINER_NAME = "sicei-container"
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
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
                sh "docker run -p 80:80 --name ${CONTAINER_NAME} -d ${IMAGE_NAME}:${IMAGE_TAG}"
            }
        }
    }
}