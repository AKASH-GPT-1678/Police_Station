terraform {
  required_providers {
    aws ={
        source = "hashicorp/aws"
        version = "6.0.0"
    }
  }
}


provider "aws" {
  region = "ap-south-1"
  
}


resource "aws_sns_sa" "name" {
  
}