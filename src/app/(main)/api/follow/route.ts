import { usersEndpoints } from "@/config/endpoints";
import { getAuthHeaders } from "@/services/utils";

export async function POST(request: Request) {
  const { userId } = await request.json();

  try {
    await fetch(usersEndpoints.followUser(userId), {
      method: "POST",
      headers: {
        ...getAuthHeaders(),
      },
    });

    const isFollowResponse = await fetch(usersEndpoints.followUser(userId), {
      headers: {
        ...getAuthHeaders(),
      },
    });

    const isFollow = await isFollowResponse.json();

    return new Response(JSON.stringify(isFollow), {
      status: 200,
    });
  } catch (e) {
    return new Response(`Webhook error: ${e.message}`, {
      status: 400,
    });
  }
}

export async function DELETE(request: Request) {
  const { userId } = await request.json();

  try {
    await fetch(usersEndpoints.followUser(userId), {
      method: "DELETE",
      headers: {
        ...getAuthHeaders(),
      },
    });

    const isFollowResponse = await fetch(usersEndpoints.followUser(userId), {
      headers: {
        ...getAuthHeaders(),
      },
    });

    const isFollow = await isFollowResponse.json();

    return new Response(JSON.stringify(isFollow), {
      status: 200,
    });
  } catch (e) {
    return new Response(`Webhook error: ${e.message}`, {
      status: 400,
    });
  }
}
