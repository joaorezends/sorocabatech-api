CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  name VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  seo_title VARCHAR(70),
  seo_description VARCHAR(250),
  seo_url VARCHAR(255),
  category_id INTEGER,
  updated_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMPTZ
);
