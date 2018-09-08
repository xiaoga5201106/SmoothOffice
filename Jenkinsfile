#!/usr/bin/env groovy
node {
    stage('checkout') {
        checkout scm
    }
    stage('git clone') {
        git branch: 'master', changelog: false, poll: true, url: 'https://github.com/xiaoga5201106/SmoothOffice.git'
    }
    stage('check npm') {
        sh "npm -version"
        sh "node -v"
    }
    stage('project starting') {
        sh "source /var/lib/jenkins/workspace/shunliban/start.sh"
    }
}
