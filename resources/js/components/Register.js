import React from 'react';
 

function Register() {
    return (
 <div class="container">
  <div class="row">
    <div class="col-md-6 mt-5 mx-auto">
    
    <form >
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <div class="form-group">
          <label for="email">Name </label>
          <input class="form-control" type="email" name="fullname" value="" placeholder="Enter FullName" />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input class="form-control" type="email" name="email" value="" placeholder="Enter Email" />
        </div>
        <div class="form-group">
          <label for="email">Password</label>
          <input class="form-control" type="email" name="email" value="" placeholder="Enter Password" />
        </div>

          <button type="submit" class="btn btn-lg btn-primary btn-block">Sign in </button>

      </form>

    </div>

  </div>
</div>    );
}

export default Register;

