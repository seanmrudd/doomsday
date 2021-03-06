$(function () {

    let id = localStorage.id;

    $.ajax("/api/scenario/" + localStorage.id, {
        type: "get"
    }).then(function (data) {
        $("#fullSceneTitle").html(data.scenario_title);
        $("#fullScenePicture").attr("src", data.scenario_image_url);
        $("#fullSceneDescription").text(data.scenario_content);
    });

    $(".newPlan").on("submit", function (event) {
        event.preventDefault();

        if (
            $("#planAuthor").val() !== "" &&
            $("#planName").val() !== "" &&
            $("#newPlanStory").val() !== ""
        ) {
            var newPlan = {
                // eslint-disable-next-line camelcase
                plan_author: $("#planAuthor")
                    .val()
                    .trim(),
                // eslint-disable-next-line camelcase
                plan_title: $("#planName")
                    .val()
                    .trim(),
                // eslint-disable-next-line camelcase
                plan_content: $("#newPlanStory")
                    .val()
                    .trim(),
                ScenarioId: localStorage.id
            };
        }
        console.log(newPlan);

        $.ajax("/api/plans", {
            type: "POST",
            data: newPlan
        }).then(function () {
            console.log("New Plan Created");
            location.pathname = "./scenario";
        });
    });
});