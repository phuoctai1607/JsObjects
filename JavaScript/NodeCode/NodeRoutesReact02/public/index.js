var RouteMaster = (function() {
    'use strict';
    // Constructor
    function RouteMaster() {
        $("#getNine").click(getNine);
        $("#getNineParse").click(getNineParse);
        $("#add").click(add);
        $("#addPost").click(addPost);
        document.body.appendChild(component());
    }

    var getNine = function() {
        var nineResult = $('#getNineResult');
        nineResult.load('/getNine', function(response, status, xhr) {
            if (status == "error") {
                nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
            }
        });
    };

    var getNineParse = function() {
        var nineResult = $('#getNineParseResult');
        $.get('/getNine', function(data) {
            nineResult.html("The value sent from the server is: <strong>" + data.result + "</strong>");
        });
    };

    var add = function() {
        var operandA = $("#operandA").val();
        var operandB = $("#operandB").val();

        $.ajax({
            url: "/add",
            type: "GET",
            data: {
                "operandA": operandA,
                "operandB": operandB
            },
            dataType: "json",
            success: function(data) {
                $("#addResult").html(operandA + " + " + operandB + " = " + data.result);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    };

    var addPost = function() {
        var operandA = $("#operandAPost").val();
        var operandB = $("#operandBPost").val();

        $.ajax({
            url: "/add",
            type: "POST",
            data: {
                "operandA": operandA,
                "operandB": operandB
            },
            dataType: "json",
            success: function(data) {
                $("#addResultPost").html(operandA + " + " + operandB + " = " + data.result);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    };

    function component() {
        var element = document.createElement('div');

        /* lodash is required for the next line to work */
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

        return element;
    }

    function reactor() {
        var Greeting = React.createClass({
            render: function() {
                return <h1 > Hello, {
                    this.props.name
                } < /h1>;
            }
        });
    }

    // Return constructor
    return RouteMaster;
}());

$(document).ready(function() {
    'use strict';
    new RouteMaster();
});