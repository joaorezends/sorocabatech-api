CREATE TABLE IF NOT EXISTS socials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type ENUM('whatsapp', 'instagram') NOT NULL,
  value VARCHAR(255) NOT NULL,
  updated_at TIMESTAMP,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP
);
