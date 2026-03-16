
INSERT INTO auth.identities (
  id,
  user_id,
  identity_data,
  provider,
  provider_id,
  last_sign_in_at,
  created_at,
  updated_at
)
VALUES (
  '477a41d8-9607-42a0-8fe7-15af45aae5dc',
  '477a41d8-9607-42a0-8fe7-15af45aae5dc',
  jsonb_build_object('sub', '477a41d8-9607-42a0-8fe7-15af45aae5dc', 'email', 'info@basewoodconsult.ac.ug'),
  'email',
  'info@basewoodconsult.ac.ug',
  now(),
  now(),
  now()
)
ON CONFLICT (provider, provider_id) DO NOTHING;
