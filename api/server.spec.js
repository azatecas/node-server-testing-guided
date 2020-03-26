const request = require('supertest');
const server = require("./server.js");


describe('server.js', () => {
    describe('GET /', () => {
        it('should return 200 ok', async () => {
            const response = await request(server).get("/")                
                expect(response.status).toBe(200);
        })
        it('should return JSON',() => {
            return request(server)
                .get("/")
                .then(res => {
                    expect(res.type).toMatch(/json/i)
                })
        })
        it('Should respond with {api:"up"}', () => {
            return requests(server)
                .get("/")
                .then(res => {
                    expect(res.body.api).toBe("up");
                })
        })
    
});
});




// describe('server.js', () => {
    
// });


// describe('server.js', () => {
    
// });


// describe('server.js', () => {
    
// });

