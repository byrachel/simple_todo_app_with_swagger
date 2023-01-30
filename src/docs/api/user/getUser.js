module.exports = {
    // operation's method
    get: {
      tags: ["User"], // operation's tag
      description: "Test another Tag", // short desc
      operationId: "othertag", // unique operation id
      parameters: [
        // expected params
        {
          name: "id", // name of param
          in: "path", // location of param
          schema: {
            $ref: "#/components/schemas/id", // id model
          },
          required: true, // mandatory
          description: "Get user profile", // short desc.
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "User data", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/User",
              },
            },
          },
        },
        // response code
        404: {
          description: "User not found", // response desc.
        },
        // response code
        500: {
          description: "Server error", // response desc.
        },
      },
    },
  };