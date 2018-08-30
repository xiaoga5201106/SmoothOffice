#!/usr/bin/env groovy

node {
 stage('checkout') {
        checkout scm
    }

    stage('check npm') {
        sh "npm -version"
    }

    stage('clean') {
        sh "chmod +x mvnw"
        sh "./mvnw clean"
    }

    stage('install tools') {
        sh "./mvnw com.github.eirslett:frontend-maven-plugin:install-node-and-yarn -DnodeVersion=v8.11.3 -DyarnVersion=v1.6.0"
    }

    stage('node install') {
        sh "yarn add node"
    }

    stage('backend tests') {
        try {
            sh "./mvnw test"
        } catch(err) {
            throw err
        } finally {
            junit '**/target/surefire-reports/TEST-*.xml'
        }
    }



    stage('packaging') {
        sh "./mvnw verify  -Pprod  -DskipTests"
        archiveArtifacts artifacts: '**/target/*.war', fingerprint: true
    }

     stage('deploy') {
        
                   sh "chmod +x deploy.sh"
                   sh "JENKINS_NODE_COOKIE=dontKillMe ./deploy.sh"            
              
     }

}
