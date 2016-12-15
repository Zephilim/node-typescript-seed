var BridgePattern;
(function (BridgePattern) {
    var Demo;
    (function (Demo) {
        function show() {
            var abstractionA = new BridgePattern.RefinedAbstractionA(new BridgePattern.ConcreteImplementorA());
            var abstractionB = new BridgePattern.RefinedAbstractionB(new BridgePattern.ConcreteImplementorB());
            abstractionA.callIt('abstractionA');
            abstractionB.callIt('abstractionB');
        }
        Demo.show = show;
    })(Demo = BridgePattern.Demo || (BridgePattern.Demo = {}));
})(BridgePattern || (BridgePattern = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbl9wYXR0ZXJuc19pbl90eXBlc2NyaXB0L2JyaWRnZS9kZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLElBQVUsYUFBYSxDQVd0QjtBQVhELFdBQVUsYUFBYTtJQUNyQixJQUFpQixJQUFJLENBU3BCO0lBVEQsV0FBaUIsSUFBSTtRQUVuQjtZQUNFLElBQUksWUFBWSxHQUE4QixJQUFJLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLGFBQWEsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7WUFDOUgsSUFBSSxZQUFZLEdBQThCLElBQUksYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksYUFBYSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztZQUU5SCxZQUFZLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BDLFlBQVksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQU5lLFNBQUksT0FNbkIsQ0FBQTtJQUNILENBQUMsRUFUZ0IsSUFBSSxHQUFKLGtCQUFJLEtBQUosa0JBQUksUUFTcEI7QUFDSCxDQUFDLEVBWFMsYUFBYSxLQUFiLGFBQWEsUUFXdEIiLCJmaWxlIjoiZGVzaWduX3BhdHRlcm5zX2luX3R5cGVzY3JpcHQvYnJpZGdlL2RlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPSdicmlkZ2UudHMnIC8+XG5uYW1lc3BhY2UgQnJpZGdlUGF0dGVybiB7XG4gIGV4cG9ydCBuYW1lc3BhY2UgRGVtbyB7XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gc2hvdygpOiB2b2lkIHtcbiAgICAgIHZhciBhYnN0cmFjdGlvbkE6IEJyaWRnZVBhdHRlcm4uQWJzdHJhY3Rpb24gPSBuZXcgQnJpZGdlUGF0dGVybi5SZWZpbmVkQWJzdHJhY3Rpb25BKG5ldyBCcmlkZ2VQYXR0ZXJuLkNvbmNyZXRlSW1wbGVtZW50b3JBKCkpO1xuICAgICAgdmFyIGFic3RyYWN0aW9uQjogQnJpZGdlUGF0dGVybi5BYnN0cmFjdGlvbiA9IG5ldyBCcmlkZ2VQYXR0ZXJuLlJlZmluZWRBYnN0cmFjdGlvbkIobmV3IEJyaWRnZVBhdHRlcm4uQ29uY3JldGVJbXBsZW1lbnRvckIoKSk7XG5cbiAgICAgIGFic3RyYWN0aW9uQS5jYWxsSXQoJ2Fic3RyYWN0aW9uQScpO1xuICAgICAgYWJzdHJhY3Rpb25CLmNhbGxJdCgnYWJzdHJhY3Rpb25CJyk7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==
