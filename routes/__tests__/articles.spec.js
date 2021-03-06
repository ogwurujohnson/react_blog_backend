const request = require("supertest");
const server = require("../../app");
// const db = require("../../data/dbConfig");

// beforeAll(async () => {
//   await db("users").delete();
//   await db("articles").delete();
//   await db("tags").delete();
//   await db("interests").delete();
//   await db("follows").delete();
// });

// afterAll(async () => {
//   await db("users").delete();
//   await db("articles").delete();
//   await db("tags").delete();
//   await db("interests").delete();
//   await db("follows").delete();
// });

// describe("GET /api/articles", () => {
//   test("should return 200 an object containing arrays of articles", async () => {
//     const response = await request(server).get("/api/articles");
//     expect(response.status).toBe(200);
//     expect(response.body).toBeInstanceOf(Object);
//   });
//   // test("Should return array of trending articles and array for main feed if no credentials are present", async () => {
//   //   const response = await request(server).get("/api/articles");
//   //   expect(response.status).toBe(200);
//   //   expect(response.body).toHaveProperty("trending");
//   //   expect(response.body).toHaveProperty("mainFeed");
//   // });
//   // test("Should return array of trending articles and array for main feed if credentials are present but user does not have interests or follow any other authors", async () => {
//   //   const mockUserData = {
//   //     email: "test1000@yahoo.com",
//   //     password: "1234",
//   //     fullname: "Test User"
//   //   };
//   //   const signUpUserResponse = await request(server)
//   //     .post("/api/auth/register")
//   //     .send(mockUserData);
//   //   const token = signUpUserResponse.body.token;

//   //   const getArticlesResponse = await request(server)
//   //     .get("/api/articles")
//   //     .set("Authorization", token);
//   //   expect(getArticlesResponse.status).toBe(200);
//   //   expect(getArticlesResponse.body).toHaveProperty("trending");
//   //   expect(getArticlesResponse.body).toHaveProperty("mainFeed");
//   // });

//   // test("Should return array of relevant articles based on users interests in place of main feed if credentials are present and user has interests", async () => {
//   //   const mockUserData = {
//   //     email: "test2000@yahoo.com",
//   //     password: "1234",
//   //     fullname: "Test User"
//   //   };
//   //   const signUpUserResponse = await request(server)
//   //     .post("/api/auth/register")
//   //     .send(mockUserData);
//   //   const token = signUpUserResponse.body.token;
//   //   const userId = signUpUserResponse.body.response.id;

//   //   const mockArticle = {
//   //     id: 2,
//   //     coverImageUrl:
//   //       "https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   //     custom_id: 12,
//   //     title: "Test 2",
//   //     authorId: userId,
//   //     body: [
//   //       {
//   //         type: "paragraph",
//   //         data: {
//   //           text:
//   //             "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
//   //         }
//   //       }
//   //     ],
//   //     createdAt: "2019-12-12",
//   //     updatedAt: "2019-12-12",
//   //     isEditing: false,
//   //     isPublished: true
//   //   };
//   //   await db("articles").insert(mockArticle);
//   //   await db("tags").insert({ name: "Business", articleId: 2 });
//   //   await db("interests").insert({ userId: userId, name: "Business" });

//   //   const getArticlesResponse = await request(server)
//   //     .get("/api/articles")
//   //     .set("Authorization", token);

//   //   expect(getArticlesResponse.status).toBe(200);
//   //   expect(getArticlesResponse.body).toHaveProperty("trending");
//   //   expect(getArticlesResponse.body).not.toHaveProperty("mainFeed");
//   //   expect(getArticlesResponse.body).toHaveProperty("interests");
//   //   expect(getArticlesResponse.body.interests[0].id).toEqual(mockArticle.id);
//   // });

//   // const mockUser = {
//   //   email: "test3000@yahoo.com",
//   //   password: "1234",
//   //   fullname: "User"
//   // };
//   // const mockAuthor = {
//   //   email: "test4000@yahoo.com",
//   //   password: "1234",
//   //   fullname: "Author"
//   // };
//   // test("Should return additional array of articles written by authors that the user follows if they follow other users", async (done) => {
//   //   const signUpUserResponse = await request(server)
//   //     .post("/api/auth/register")
//   //     .send(mockUser);
//   //   const token = signUpUserResponse.body.token;
//   //   const userId = signUpUserResponse.body.response.id;

//   //   const signUpAuthorResponse = await request(server)
//   //     .post("/api/auth/register")
//   //     .send(mockAuthor);
//   //   const authorId = signUpAuthorResponse.body.response.id;

//   //   const mockArticle = {
//   //     id: 1,
//   //     coverImageUrl:
//   //       "https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//   //     custom_id: 12,
//   //     title: "Test 2",
//   //     authorId: authorId,
//   //     body: [
//   //       {
//   //         type: "paragraph",
//   //         data: {
//   //           text:
//   //             "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
//   //         }
//   //       }
//   //     ],
//   //     createdAt: "2019-12-12",
//   //     updatedAt: "2019-12-12",
//   //     isEditing: false,
//   //     isPublished: true
//   //   };

//   //   await db("articles").insert(mockArticle);
//   //   await db("follows").insert({ followerId: userId, followingId: authorId });

//   //   const getArticlesResponse = await request(server)
//   //     .get("/api/articles")
//   //     .set("Authorization", token);

//   //   expect(getArticlesResponse.status).toBe(200);
//   //   expect(getArticlesResponse.body).toHaveProperty("trending");
//   //   expect(getArticlesResponse.body).toHaveProperty("following");
//   //   expect(getArticlesResponse.body.following[0].authorId).toEqual(authorId);
//   //   done();
//   // });
// });

// describe("POST /articles/like/:id endpoint", () => {

//   test("Should return 404 if no user id or article id present", async () => {
//     const response = await request(server).post(`/api/articles/like/${1}`);
//     expect(response.status).toBe(404);
//   });

//   test("Should return message asking user to log in to like article if no user id present", async () => {
//     const mockUserData = {
//       fullname: "Test user",
//       email: "testuser@gmail.com",
//       password: "1234"
//     };
//     const mockAuthorData = {
//       fullname: "Test author",
//       email: "testauthor@gmail.com",
//       password: "1234"
//     };

//     await request(server)
//       .post("/api/auth/register")
//       .send(mockUserData);
//     const registerAuthorResponse = await request(server)
//       .post("/api/auth/register")
//       .send(mockAuthorData);
//     const authorId = registerAuthorResponse.body.response.id;

//     const mockArticle = {
//       id: 1,
//       custom_id: 12,
//       title: "Test 2",
//       authorId: authorId,
//       body: [
//         {
//           type: "paragraph",
//           data: {
//             text:
//               "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
//           }
//         }
//       ],
//       isEditing: false,
//       isPublished: true
//     };
//     await db("articles").insert(mockArticle);

//     const likeArticleResponse = await request(server).post(
//       `/api/articles/like/${mockArticle.id}`
//     );

//     expect(likeArticleResponse.status).toBe(404);
//     expect(likeArticleResponse.text).toEqual(
//       '{"message":"Must be logged in to like article."}'
//     );
//   });

//   // test("Should return status 200, user id, article id and new like count for given article if uesr id and article id present", async () => {
//   //   const mockUserData = {
//   //     fullname: "Test user",
//   //     email: "testuser2@gmail.com",
//   //     password: "1234"
//   //   };
//   //   const mockAuthorData = {
//   //     fullname: "Test author",
//   //     email: "testauthor2@gmail.com",
//   //     password: "1234"
//   //   };

//   //   const registerUserResponse = await request(server)
//   //     .post("/api/auth/register")
//   //     .send(mockUserData);
//   //   const registerAuthorResponse = await request(server)
//   //     .post("/api/auth/register")
//   //     .send(mockAuthorData);
//   //   const authorId = registerAuthorResponse.body.response.id;
//   //   const userToken = registerUserResponse.body.token;

//   //   const mockArticle = {
//   //     id: 2,
//   //     custom_id: 12,
//   //     title: "Test 2",
//   //     authorId: authorId,
//   //     body: [
//   //       {
//   //         type: "paragraph",
//   //         data: {
//   //           text:
//   //             "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
//   //         }
//   //       }
//   //     ],
//   //     isEditing: false,
//   //     isPublished: true
//   //   };
//   //   await db("articles").insert(mockArticle);

//   //   const likeArticleResponse = await request(server)
//   //     .post(`/api/articles/like/${mockArticle.id}`)
//   //     .set("Authorization", userToken);

//   //   expect(likeArticleResponse.status).toBe(200);
//   //   expect(likeArticleResponse.body.message).toEqual(
//   //     "Successfully liked article"
//   //   );
//   //   expect(likeArticleResponse.body.articleId).toBe(`${mockArticle.id}`);
//   //   expect(likeArticleResponse.body.userId).toBe(
//   //     registerUserResponse.body.response.id
//   //   );
//   //   expect(likeArticleResponse.body).toHaveProperty("newLikeCount");
//   // });
// });

describe("server", () => {
  describe("[GET] / endpoint", () => {
    test("the db env is testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  describe("[GET] /articles/author/:authorId endpoint", () => {
    test("Should return 200 if successful", async () => {
      const response = await request(server).get("/api/articles/author/1");
      expect(response.status).toBe(200);
    });
    test("Should return 404 if invalid author id provided", async () => {
      const response = await request(server).get(
        "/api/articles/author/11235345435"
      );
      expect(response.status).toBe(404);
    });
  });
});
