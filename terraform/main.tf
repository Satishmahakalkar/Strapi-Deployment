provider "aws" {
  region = "us-east-1"  # Choose your AWS region
}

resource "aws_instance" "strapi_app" {
  ami           = "ami-084568db4383264d4"  # Replace with a valid Ubuntu AMI for your region
  instance_type = "t2.small"  # Choose EC2 instance type (adjust as needed)
  key_name      = "project-key"  # SSH key name to access EC2

  tags = {
    Name = "StrapiApp"
  }

  # User data to install Docker and run Strapi container
  user_data = <<-EOF
              #!/bin/bash
              sudo apt update -y
              sudo apt install -y docker.io
              sudo docker run -d -p 80:1337 --name strapi-app $IMAGE_TAG
              EOF
}

# Output the EC2 public IP for verification
output "public_ip" {
  value = aws_instance.strapi_app.public_ip
}
