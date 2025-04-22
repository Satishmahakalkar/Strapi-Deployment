variable "aws_region" {
  description = "The AWS region to deploy in"
  default     = "us-east-1"
}

variable "ami_id" {
  description = "AMI ID for the EC2 instance"
  default     = "ami-084568db4383264d4"  # Replace with valid AMI ID
}
