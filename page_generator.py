from mako.template import Template
from mako.runtime import Context
from StringIO import StringIO
from mako.lookup import TemplateLookup
# this is where to find the other included one.
included_lookup = TemplateLookup(directories=['.'],output_encoding='utf-8',input_encoding='utf-8',encoding_errors='replace')
mytemplate = Template(filename='home_v2.tpl',lookup=included_lookup)
buf = StringIO()
# context can also be used for included files.
# think about to movn these variables into several files.
ctx = Context(buf, rows_val=[{'p':'row_1_col_1'},{'p':'row_2_col_1'}], included_val={'p':'something'})
mytemplate.render_context(ctx)
print buf.getvalue().encode('utf-8')
