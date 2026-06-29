export async function POST(request) {
    const data = await request.json();

    console.log("API received client:", data);

    return Response.json({
        message: "Client received correctly",
        client: data,
    });
}