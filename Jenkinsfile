#!/usr/bin/env groovy
node {
    stage('checkout') {
        checkout scm
    }
    stage('check npm&&node') {
        sh "npm -version"
    sh "node -v"
    }
    stage('npm install') {
        sh "apt-get install -y npm"
    }
    stage('tests') {
        sh "npm test"
    }
    stage('packaging') {
        sh "npm run build"
    }
    stage('deploy') {
        sh "npm run dev"
    }
}