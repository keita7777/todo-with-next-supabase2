import { NextResponse } from "next/server";
import { supabase } from "../utils/supabaseClient";

export async function GET(req: Request, res: Response) {
  const { data, error } = await supabase.from("todoList").select("*");

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function POST(req: Request, res: Response) {
  const { id, text } = await req.json();
  const { data, error } = await supabase.from("todoList").insert([
    {
      id,
      text,
      status: {
        id: "notstarted",
        name: "未着手",
      },
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: Response) {
  const body = await req.json();
  const { id } = body;
  const { data, error } = await supabase.from("todoList").delete().eq("id", id);

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data, { status: 200 });
}

// export async function PUT(req: Request, res: Response) {
//   const body = await req.json();
//   const { id, text, status } = body;
//   const { data, error } = await supabase
//     .from("todoList")
//     .update({
//       text,
//       status: {
//         id: status.id,
//         name: status.name,
//       },
//     })
//     .eq("id", id);

//   if (error) {
//     return NextResponse.json(error);
//   }

//   return NextResponse.json(data, { status: 200 });
// }
