import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.NEXT_PUBLIC_WORDPRESS_KEY}`,
    },
  };
  try {
    const res = await fetch(
      "https://wealthexpo.la/wp-json/wc/v3/orders",
      requestOptions
    );

    const response = await res.json();
    console.log(response);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error,
      },
      {
        status: 500,
      }
    );
  }
}
