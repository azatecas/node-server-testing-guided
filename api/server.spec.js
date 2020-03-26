const request = require('supertest');
const server = require("./server.js");


describe('server.js', () => {
    describe('GET /', () => {
        it('should return 200 ok', async () => {
            const response = await request(server).get("/")
                
                expect(response.status).toBe(200);
        })
        it.todo('should return JSON')
        it.todo('Should respond with {api:"up"} ')
    
});
});




// describe('server.js', () => {
    
// });


// describe('server.js', () => {
    
// });


// describe('server.js', () => {
    
// });

