node {
  stage('Build') {
    docker.build('my-node-app')
  }
  stage('Test') {
    docker.image('my-node-app').inside {
      sh 'node test-case-1.js'
      sh 'node test-case-2.js'
      sh 'node test-case-3.js'
      sh 'node test-case-4.js'
      sh 'node test-case-5.js'
    }
  }
  stage('Deploy') {
    // Deploy the code to a test environment
  }
}

