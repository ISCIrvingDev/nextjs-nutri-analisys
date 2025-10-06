// import { supabase } from "./supabase";

// function generateUserIdentifier(): string {
//   const fingerprint = [
//     navigator.userAgent,
//     navigator.language,
//     new Date().getTimezoneOffset(),
//     screen.colorDepth,
//     screen.width + "x" + screen.height,
//   ].join("|");
//   /*
//   * "fingerprint" en mi Google Chrome
//   Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36|es-MX|360|24|2560x1440

//   * "fingerprint" en mi Google Chrome (cambiando el tamaño de la pantalla desde la consola)
//   Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36|es-MX|360|24|1024x768

//   * "fingerprint" en mi Mozilla
//   Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0|es-MX|360|24|2560x1440
//   */

//   return btoa(fingerprint).substring(0, 50);
// }

// export async function checkUploadLimit(): Promise<{
//   allowed: boolean;
//   count: number;
// }> {
//   const identifier = generateUserIdentifier();

//   const { data, error } = await supabase
//     .from("user_uploads")
//     .select("upload_count")
//     .eq("user_identifier", identifier)
//     .maybeSingle();

//   if (error) {
//     console.error("Error checking upload limit:", error);
//     return { allowed: true, count: 0 };
//   }

//   const currentCount = data?.upload_count || 0;
//   return { allowed: currentCount < 3, count: currentCount };
// }

// export async function incrementUploadCount(): Promise<void> {
//   const identifier = generateUserIdentifier();

//   const { data: existing } = await supabase
//     .from("user_uploads")
//     .select("id, upload_count")
//     .eq("user_identifier", identifier)
//     .maybeSingle();

//   if (existing) {
//     await supabase
//       .from("user_uploads")
//       .update({
//         upload_count: existing.upload_count + 1,
//         last_upload_at: new Date().toISOString(),
//       })
//       .eq("id", existing.id);
//   } else {
//     await supabase.from("user_uploads").insert({
//       user_identifier: identifier,
//       upload_count: 1,
//     });
//   }
// }
