describe("Player", function () {
    var Player = require('./Player');
    var Song = require('./Song');
    var player;
    var song;
    beforeEach(function () {
        player = new Player();
        song = new Song();
    });
    it("should be able to play a Song", function () {
        player.play(song);
        expect(player.currentlyPlayingSong).toEqual(song);
        expect(player).toBePlaying(song);
    });
    describe("when song has been paused", function () {
        beforeEach(function () {
            player.play(song);
            player.pause();
        });
        it("should indicate that the song is currently paused", function () {
            expect(player.isPlaying).toBeFalsy();
            expect(player).not.toBePlaying(song);
        });
        it("should be possible to resume", function () {
            player.resume();
            expect(player.isPlaying).toBeTruthy();
            expect(player.currentlyPlayingSong).toEqual(song);
        });
    });
    it("tells the current song if the user has made it a favorite", function () {
        spyOn(song, 'persistFavoriteStatus');
        player.play(song);
        player.makeFavorite();
        expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
    });
    describe("#resume", function () {
        it("should throw an exception if song is already playing", function () {
            player.play(song);
            expect(function () {
                player.resume();
            }).toThrowError("song is already playing");
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImphc21pbmVFeGFtcGxlcy9QbGF5ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxRQUFRLENBQUMsUUFBUSxFQUFFO0lBQ2pCLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLElBQUksQ0FBQztJQUVULFVBQVUsQ0FBQztRQUNULE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBRXBCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUdsRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLDJCQUEyQixFQUFFO1FBQ3BDLFVBQVUsQ0FBQztZQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG1EQUFtRCxFQUFFO1lBQ3RELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFHckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUU7WUFDakMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO1FBQzlELEtBQUssQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUVyQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV0QixNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFHSCxRQUFRLENBQUMsU0FBUyxFQUFFO1FBQ2xCLEVBQUUsQ0FBQyxzREFBc0QsRUFBRTtZQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxCLE1BQU0sQ0FBQztnQkFDTCxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6Imphc21pbmVFeGFtcGxlcy9QbGF5ZXIuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi90b29scy9tYW51YWxfdHlwaW5ncy9wcm9qZWN0L2phc21pbmUuZC50c1wiIC8+XG5cbmRlc2NyaWJlKFwiUGxheWVyXCIsIGZ1bmN0aW9uKCkge1xuICB2YXIgUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKTtcbiAgdmFyIFNvbmcgPSByZXF1aXJlKCcuL1NvbmcnKTtcbiAgdmFyIHBsYXllcjtcbiAgdmFyIHNvbmc7XG5cbiAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgc29uZyA9IG5ldyBTb25nKCk7XG5cbiAgfSk7XG5cbiAgaXQoXCJzaG91bGQgYmUgYWJsZSB0byBwbGF5IGEgU29uZ1wiLCBmdW5jdGlvbigpIHtcbiAgICBwbGF5ZXIucGxheShzb25nKTtcbiAgICBleHBlY3QocGxheWVyLmN1cnJlbnRseVBsYXlpbmdTb25nKS50b0VxdWFsKHNvbmcpO1xuXG4gICAgLy9kZW1vbnN0cmF0ZXMgdXNlIG9mIGN1c3RvbSBtYXRjaGVyXG4gICAgZXhwZWN0KHBsYXllcikudG9CZVBsYXlpbmcoc29uZyk7XG4gIH0pO1xuXG4gIGRlc2NyaWJlKFwid2hlbiBzb25nIGhhcyBiZWVuIHBhdXNlZFwiLCBmdW5jdGlvbigpIHtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnBsYXkoc29uZyk7XG4gICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGluZGljYXRlIHRoYXQgdGhlIHNvbmcgaXMgY3VycmVudGx5IHBhdXNlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAgIGV4cGVjdChwbGF5ZXIuaXNQbGF5aW5nKS50b0JlRmFsc3koKTtcblxuICAgICAgLy8gZGVtb25zdHJhdGVzIHVzZSBvZiAnbm90JyB3aXRoIGEgY3VzdG9tIG1hdGNoZXJcbiAgICAgIGV4cGVjdChwbGF5ZXIpLm5vdC50b0JlUGxheWluZyhzb25nKTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGJlIHBvc3NpYmxlIHRvIHJlc3VtZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHBsYXllci5yZXN1bWUoKTtcbiAgICAgIGV4cGVjdChwbGF5ZXIuaXNQbGF5aW5nKS50b0JlVHJ1dGh5KCk7XG4gICAgICBleHBlY3QocGxheWVyLmN1cnJlbnRseVBsYXlpbmdTb25nKS50b0VxdWFsKHNvbmcpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBkZW1vbnN0cmF0ZXMgdXNlIG9mIHNwaWVzIHRvIGludGVyY2VwdCBhbmQgdGVzdCBtZXRob2QgY2FsbHNcbiAgaXQoXCJ0ZWxscyB0aGUgY3VycmVudCBzb25nIGlmIHRoZSB1c2VyIGhhcyBtYWRlIGl0IGEgZmF2b3JpdGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgc3B5T24oc29uZywgJ3BlcnNpc3RGYXZvcml0ZVN0YXR1cycpO1xuXG4gICAgcGxheWVyLnBsYXkoc29uZyk7XG4gICAgcGxheWVyLm1ha2VGYXZvcml0ZSgpO1xuXG4gICAgZXhwZWN0KHNvbmcucGVyc2lzdEZhdm9yaXRlU3RhdHVzKS50b0hhdmVCZWVuQ2FsbGVkV2l0aCh0cnVlKTtcbiAgfSk7XG5cbiAgLy9kZW1vbnN0cmF0ZXMgdXNlIG9mIGV4cGVjdGVkIGV4Y2VwdGlvbnNcbiAgZGVzY3JpYmUoXCIjcmVzdW1lXCIsIGZ1bmN0aW9uKCkge1xuICAgIGl0KFwic2hvdWxkIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBzb25nIGlzIGFscmVhZHkgcGxheWluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICAgIHBsYXllci5wbGF5KHNvbmcpO1xuXG4gICAgICBleHBlY3QoZnVuY3Rpb24oKSB7XG4gICAgICAgIHBsYXllci5yZXN1bWUoKTtcbiAgICAgIH0pLnRvVGhyb3dFcnJvcihcInNvbmcgaXMgYWxyZWFkeSBwbGF5aW5nXCIpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIl19
