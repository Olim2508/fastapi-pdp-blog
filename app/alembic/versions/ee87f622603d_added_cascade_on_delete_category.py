"""Added cascade on delete category

Revision ID: ee87f622603d
Revises: 6e44a46a1b24
Create Date: 2023-08-28 14:16:57.409172

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ee87f622603d'
down_revision = '6e44a46a1b24'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('post_category_id_fkey', 'post', type_='foreignkey')
    op.create_foreign_key(None, 'post', 'category', ['category_id'], ['id'], ondelete='CASCADE')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'post', type_='foreignkey')
    op.create_foreign_key('post_category_id_fkey', 'post', 'category', ['category_id'], ['id'])
    # ### end Alembic commands ###