Rails.application.routes.draw do

  root 'lists#index'

  resources :lists
  resources :tasks

  resources :lists do
    resources :tasks
  end
  
end
