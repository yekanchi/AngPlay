// /* groovylint-disable NglParseError */
// /* groovylint-disable-next-line NglParseError */
// pipeline {
//   agent any
//   stages {
//     stage('Install Packages') {
//       steps {
//         pwsh 'Write-Host "Hello World"'
//       }
//     }
//     stage('Print Info') {
//       steps {
//         pwsh 'Write-Host "Brnach Name Is:" + $env:BRANCH_NAME'
//       }
//     }
//     stage('Build Project') {
//       steps {
//         pwsh 'npm build'
//       }
//     }
//     stage('Publish Dev') {
//       when {
//           branch 'dev'
//       }
//       steps {
//         pwsh 'Write-Host "Publishing To Dev"'
//       }
//     }
//     stage('Publish Main') {
//       when {
//           branch 'main'
//       }
//       steps {
//         pwsh 'Write-Host "Publishing To Main"'
//       }
//     }
//   }
