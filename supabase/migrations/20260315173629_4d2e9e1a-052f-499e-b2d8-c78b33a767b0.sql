
-- Create the admin user in auth.users (no ON CONFLICT since email isn't unique constrained directly)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM auth.users WHERE email = 'info@basewoodconsult.ac.ug'
  ) THEN
    INSERT INTO auth.users (
      id,
      instance_id,
      email,
      encrypted_password,
      email_confirmed_at,
      created_at,
      updated_at,
      raw_app_meta_data,
      raw_user_meta_data,
      is_super_admin,
      role,
      aud
    )
    VALUES (
      gen_random_uuid(),
      '00000000-0000-0000-0000-000000000000',
      'info@basewoodconsult.ac.ug',
      crypt('basewood@2026', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{}',
      false,
      'authenticated',
      'authenticated'
    );
  ELSE
    UPDATE auth.users
    SET
      encrypted_password = crypt('basewood@2026', gen_salt('bf')),
      email_confirmed_at = now(),
      updated_at = now()
    WHERE email = 'info@basewoodconsult.ac.ug';
  END IF;
END $$;
