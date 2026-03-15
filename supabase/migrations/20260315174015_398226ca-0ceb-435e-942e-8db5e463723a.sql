
UPDATE auth.users
SET 
  encrypted_password = crypt('basewood@2026', gen_salt('bf')),
  email_confirmed_at = now(),
  confirmation_token = '',
  recovery_token = '',
  updated_at = now()
WHERE email = 'info@basewoodconsult.ac.ug';
