#!/usr/bin/env groovy
node {
    stage('checkout') {
        checkout scm
    }
    stage('git') {
        git branch: 'master', changelog: false, poll: true, url: 'https://github.com/xiaoga5201106/SmoothOffice.git'
    }

    stage('check npm&&node') {
        sh "npm -version"
    sh "node -v"
    }

    stage('build') {
        sh "npm run build"
    }
    stage('run') {
        sh "npm run dev"
    }

}