import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (_req) => {
  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  const email = "info@basewoodconsult.ac.ug";
  const password = "basewood@2026";

  // List users to check if admin already exists
  const { data: listData } = await supabaseAdmin.auth.admin.listUsers();
  const existing = listData?.users?.find((u) => u.email === email);

  let result;
  if (existing) {
    // Update password
    result = await supabaseAdmin.auth.admin.updateUserById(existing.id, {
      password,
      email_confirm: true,
    });
  } else {
    // Create new user
    result = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
  }

  if (result.error) {
    return new Response(JSON.stringify({ error: result.error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({ success: true, user: result.data.user?.email }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
});
