# Strapi Deployment with GitHub Actions and Terraform

This repository contains the automation for deploying Strapi on AWS EC2 using Docker, GitHub Actions for CI/CD, and Terraform for infrastructure deployment.

## Setup

1. Push code to the `main` branch to trigger CI.
2. Manually trigger the Terraform pipeline from GitHub Actions to deploy Strapi on EC2.

## Files

- `ci.yml`: GitHub Actions CI pipeline for Docker build and push.
- `terraform.yml`: GitHub Actions pipeline for Terraform deployment.
- `main.tf`: Terraform configuration for EC2 and Docker deployment.

## Deployment

Once the Docker image is built and pushed, Terraform will deploy it to an EC2 instance.

## Requirements

- AWS credentials (set in GitHub Secrets)
- Docker Hub credentials (set in GitHub Secrets)
