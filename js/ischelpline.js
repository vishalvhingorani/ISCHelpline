$('.button-collapse').sideNav();

$('.slider').slider({
    indicators: false,
    height: 500,
    transition:500,
    interval: 4000
});

$('.autocomplete').autocomplete({
    data: {
        "Physics": null,
        "Chemistry": null,
        "Mathematics": null,
        "English": null,
        "Economics": null,
        "Language": null,
        "Literature": null,
        "Past Papers":null,
        "All Material":null,
        "Short Stories":null,
        "Shakespeare":null,
        "Poems":null,
        "Essay Writing":null,
        "Report Writing":null,
        "Comprehension":null,
        "Grammar":null,
        "Organic Chemistry":null,
        "Inorganic Chemistry":null,
        "Physical Chemistry":null,
        "Board Papers":null,
        "Calculus":null,
        "Integration":null,
        "Relations":null,
        "Functions":null,
        "Algebra":null,
        "Probability":null,
        "Linear Regression":null,
        "Linear Programming":null,
        "Electrostatics":null,
        "Current Electricity":null,
        "Magnetic Effects of Current and Magnetism":null,
        "Electromagnetic Induction":null,
        "Alternating Currents":null,
        "Electromagnetic Waves":null,
        "Optics": null,
        "Dual Nature":null,
        "Atom":null,
        "Electronic Devices":null,
        "Semiconductors":null,
        "Communication Systems":null,
        "Microeconomics":null,
        "Macroeconomics":null,
        "Demand":null,
        "Supply":null,
        "Theory of Consumer Behaviour":null,
        "Market Mechanism":null,
        "Law of Returns":null,
        "Cost":null,
        "Money":null,
        "Theory of Income and Employment":null,
        "Banks":null,
        "National Income":null,
        "Budget":null,
        "Fiscal Policy":null,
        },
        minLength:2
      });

$('.scrollspy').scrollSpy();

$('#button').click(function() {

    var ip = document.getElementById('input').value;

    if(ip=="Physics" || ip=="physics" || ip=="Electrostatics" || ip=="Current Electricity" || ip=="Magnetic Effects of Current and Magnetism" || ip=="Electromagnetic Induction" || ip=="Alternating Currents" || ip=="Electromagnetic Waves" || ip=="Optics" || ip=="Dual Nature" || ip=="Atom" || ip=="Electronic Devices" || ip=="Semiconductors" || ip=="Communication Systems")
    {
      window.location.assign("physics.html");
    }
    else if(ip=="Past Papers" || ip=="past papers" || ip=="Board Papers")
    {
      window.location.assign("pastpapers.html");
    }
    else if(ip=="Chemistry" || ip=="chemistry" || ip=="Chem" || ip=="chem" || ip=="Organic Chemistry" || ip=="Inorganic Chemistry" || ip=="Physical Chemistry")
    {
      window.location.assign("chemistry.html");
    }
    else if(ip=="Mathematics" || ip=="mathematics" || ip=="math" || ip=="Calculus" || ip=="Integration" || ip=="Relations" || ip=="Functions" || ip=="Algebra" || ip=="Probability" || ip=="Linear Regression" || ip=="Linear Programming")
    {
      window.location.assign("math.html");
    }
    else if(ip=="English" || ip=="english" || ip=="Literature" || ip=="Language" || ip=="Shakespeare" || ip=="Short Stories" || ip=="Poems" || ip=="Essay Writing" || ip=="Report Writing" || ip=="Comprehension" || ip=="Grammar" )
    {
      window.location.assign("english.html");
    }
    else if(ip=="Economics" || ip=="eco" || ip=="Eco" || ip=="economics" || ip=="Microeconomics" || ip=="Macroeconomics" || ip=="Demand" || ip=="Supply" || ip=="Theory of Consumer Behaviour" || ip=="Market Mechanism" || ip=="Law of Returns" || ip=="Cost" || ip=="Money" || ip=="Banks" || ip=="Budget" || ip=="Fiscal Policy" || ip=="National Income" || ip=="Theory of Income and Employment" )
    {
      window.location.assign("economics.html");
    }
    else if(ip=="All Material" || ip=="all material")
    {
      window.location.assign("ref.html");
    }
    else if(ip=="About" || ip=="about")
    {
      window.location.assign("landingpage.html#about");
    }
    else if(ip=="Contact" || ip=="contact")
    {
      window.location.assign("landingpage.html#contact");
    }
    else {
      $('.nomatch').show();
      $('.popupCloseButton').click(function () {
        $('.nomatch').hide();
    });
    }
});

