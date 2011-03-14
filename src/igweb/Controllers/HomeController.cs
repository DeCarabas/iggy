using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace igweb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            // A little hard-coded redirect never hurt anybody, right?
            return File("/index.html", "text/html");
        }
    }
}
